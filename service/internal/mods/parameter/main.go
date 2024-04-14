package parameter

import (
	"context"

	"github.com/phpk/godo.cpp/internal/config"

	"github.com/gin-gonic/gin"
	"github.com/phpk/godo.cpp/internal/mods/parameter/api"
	"github.com/phpk/godo.cpp/internal/mods/parameter/schema"
	"gorm.io/gorm"
)

type PARAMETER struct {
	DB           *gorm.DB
	ParameterAPI *api.Parameter
}

func (a *PARAMETER) AutoMigrate(ctx context.Context) error {
	return a.DB.AutoMigrate(new(schema.Parameter))
}

func (a *PARAMETER) Init(ctx context.Context) error {
	if config.C.Storage.DB.AutoMigrate {
		if err := a.AutoMigrate(ctx); err != nil {
			return err
		}
	}
	return nil
}

func (a *PARAMETER) RegisterV1Routers(ctx context.Context, v1 *gin.RouterGroup) error {
	parameter := v1.Group("parameters")
	{
		parameter.GET("", a.ParameterAPI.Query)
		parameter.GET(":id", a.ParameterAPI.Get)
		parameter.POST("", a.ParameterAPI.Create)
		parameter.PUT(":id", a.ParameterAPI.Update)
		parameter.DELETE(":id", a.ParameterAPI.Delete)
	}
	return nil
}

func (a *PARAMETER) Release(ctx context.Context) error {
	return nil
}

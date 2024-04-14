package mods

import (
	"context"

	"github.com/gin-gonic/gin"
	"github.com/google/wire"
	"github.com/phpk/godo.cpp/internal/mods/parameter"
	"github.com/phpk/godo.cpp/internal/mods/rbac"
	"github.com/phpk/godo.cpp/internal/mods/sys"
)

const (
	apiPrefix = "/api/"
)

// Collection of wire providers
var Set = wire.NewSet(
	wire.Struct(new(Mods), "*"),
	rbac.Set,
	sys.Set,
	parameter.Set,
)

type Mods struct {
	RBAC      *rbac.RBAC
	SYS       *sys.SYS
	PARAMETER *parameter.PARAMETER
}

func (a *Mods) Init(ctx context.Context) error {
	if err := a.RBAC.Init(ctx); err != nil {
		return err
	}
	if err := a.SYS.Init(ctx); err != nil {
		return err
	}
	if err := a.PARAMETER.Init(ctx); err != nil {
		return err
	}

	return nil
}

func (a *Mods) RouterPrefixes() []string {
	return []string{
		apiPrefix,
	}
}

func (a *Mods) RegisterRouters(ctx context.Context, e *gin.Engine) error {
	gAPI := e.Group(apiPrefix)
	v1 := gAPI.Group("v1")

	if err := a.RBAC.RegisterV1Routers(ctx, v1); err != nil {
		return err
	}
	if err := a.SYS.RegisterV1Routers(ctx, v1); err != nil {
		return err
	}
	if err := a.PARAMETER.RegisterV1Routers(ctx,

		v1); err != nil {
		return err
	}

	return nil
}

func (a *Mods) Release(ctx context.Context) error {
	if err := a.RBAC.Release(ctx); err != nil {
		return err
	}
	if err := a.SYS.Release(ctx); err != nil {
		return err
	}
	if err := a.PARAMETER.Release(ctx); err != nil {
		return err
	}

	return nil
}

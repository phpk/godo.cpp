package parameter

import (
	"github.com/google/wire"
	"github.com/phpk/godo.cpp/internal/mods/parameter/api"
	"github.com/phpk/godo.cpp/internal/mods/parameter/biz"
	"github.com/phpk/godo.cpp/internal/mods/parameter/dal"
)

var Set = wire.NewSet(
	wire.Struct(new(PARAMETER), "*"),
	wire.Struct(new(dal.Parameter), "*"),
	wire.Struct(new(biz.Parameter), "*"),
	wire.Struct(new(api.Parameter), "*"),
)

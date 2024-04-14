package dal

import (
	"context"

	"github.com/phpk/godo.cpp/internal/mods/parameter/schema"
	"github.com/phpk/godo.cpp/pkg/errors"
	"github.com/phpk/godo.cpp/pkg/util"
	"gorm.io/gorm"
)

// Get parameter storage instance
func GetParameterDB(ctx context.Context, defDB *gorm.DB) *gorm.DB {
	return util.GetDB(ctx, defDB).Model(new(schema.Parameter))
}

// System parameter management
type Parameter struct {
	DB *gorm.DB
}

// Query parameters from the database based on the provided parameters and options.
func (a *Parameter) Query(ctx context.Context, params schema.ParameterQueryParam, opts ...schema.ParameterQueryOptions) (*schema.ParameterQueryResult, error) {
	var opt schema.ParameterQueryOptions
	if len(opts) > 0 {
		opt = opts[0]
	}

	db := GetParameterDB(ctx, a.DB)
	if v := params.LikeName; len(v) > 0 {
		db = db.Where("name LIKE ?", "%"+v+"%")
	}
	if v := params.Status; len(v) > 0 {
		db = db.Where("status = ?", v)
	}

	var list schema.Parameters
	pageResult, err := util.WrapPageQuery(ctx, db, params.PaginationParam, opt.QueryOptions, &list)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	queryResult := &schema.ParameterQueryResult{
		PageResult: pageResult,
		Data:       list,
	}
	return queryResult, nil
}

// Get the specified parameter from the database.
func (a *Parameter) Get(ctx context.Context, id string, opts ...schema.ParameterQueryOptions) (*schema.Parameter, error) {
	var opt schema.ParameterQueryOptions
	if len(opts) > 0 {
		opt = opts[0]
	}

	item := new(schema.Parameter)
	ok, err := util.FindOne(ctx, GetParameterDB(ctx, a.DB).Where("id=?", id), opt.QueryOptions, item)
	if err != nil {
		return nil, errors.WithStack(err)
	} else if !ok {
		return nil, nil
	}
	return item, nil
}

// Exists checks if the specified parameter exists in the database.
func (a *Parameter) Exists(ctx context.Context, id string) (bool, error) {
	ok, err := util.Exists(ctx, GetParameterDB(ctx, a.DB).Where("id=?", id))
	return ok, errors.WithStack(err)
}

// Exist checks if the specified name exists in the database.
func (a *Parameter) ExistsName(ctx context.Context, name string) (bool, error) {
	ok, err := util.Exists(ctx, GetParameterDB(ctx, a.DB).Where("name=?", name))
	return ok, errors.WithStack(err)
}

// Create a new parameter.
func (a *Parameter) Create(ctx context.Context, item *schema.Parameter) error {
	result := GetParameterDB(ctx, a.DB).Create(item)
	return errors.WithStack(result.Error)
}

// Update the specified parameter in the database.
func (a *Parameter) Update(ctx context.Context, item *schema.Parameter) error {
	result := GetParameterDB(ctx, a.DB).Where("id=?", item.ID).Select("*").Omit("created_at").Updates(item)
	return errors.WithStack(result.Error)
}

// Delete the specified parameter from the database.
func (a *Parameter) Delete(ctx context.Context, id string) error {
	result := GetParameterDB(ctx, a.DB).Where("id=?", id).Delete(new(schema.Parameter))
	return errors.WithStack(result.Error)
}

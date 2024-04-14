package biz

import (
	"context"
	"time"

	"github.com/phpk/godo.cpp/internal/mods/parameter/dal"
	"github.com/phpk/godo.cpp/internal/mods/parameter/schema"
	"github.com/phpk/godo.cpp/pkg/errors"
	"github.com/phpk/godo.cpp/pkg/util"
)

// System parameter management
type Parameter struct {
	Trans        *util.Trans
	ParameterDAL *dal.Parameter
}

// Query parameters from the data access object based on the provided parameters and options.
func (a *Parameter) Query(ctx context.Context, params schema.ParameterQueryParam) (*schema.ParameterQueryResult, error) {
	params.Pagination = true

	result, err := a.ParameterDAL.Query(ctx, params, schema.ParameterQueryOptions{
		QueryOptions: util.QueryOptions{
			OrderFields: []util.OrderByParam{
				{Field: "created_at", Direction: util.DESC},
			},
		},
	})
	if err != nil {
		return nil, err
	}
	return result, nil
}

// Get the specified parameter from the data access object.
func (a *Parameter) Get(ctx context.Context, id string) (*schema.Parameter, error) {
	parameter, err := a.ParameterDAL.Get(ctx, id)
	if err != nil {
		return nil, err
	} else if parameter == nil {
		return nil, errors.NotFound("", "Parameter not found")
	}
	return parameter, nil
}

// Create a new parameter in the data access object.
func (a *Parameter) Create(ctx context.Context, formItem *schema.ParameterForm) (*schema.Parameter, error) {
	parameter := &schema.Parameter{
		ID:        util.NewXID(),
		CreatedAt: time.Now(),
	}
	if exists, err := a.ParameterDAL.ExistsName(ctx, formItem.Name); err != nil {
		return nil, err
	} else if exists {
		return nil, errors.BadRequest("", "Name already exists")
	}

	if err := formItem.FillTo(parameter); err != nil {
		return nil, err
	}

	err := a.Trans.Exec(ctx, func(ctx context.Context) error {
		if err := a.ParameterDAL.Create(ctx, parameter); err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	return parameter, nil
}

// Update the specified parameter in the data access object.
func (a *Parameter) Update(ctx context.Context, id string, formItem *schema.ParameterForm) error {
	parameter, err := a.ParameterDAL.Get(ctx, id)
	if err != nil {
		return err
	} else if parameter == nil {
		return errors.NotFound("", "Parameter not found")
	}
	if parameter.Name != formItem.Name {
		if exists, err := a.ParameterDAL.ExistsName(ctx, formItem.Name); err != nil {
			return err
		} else if exists {
			return errors.BadRequest("", "Name already exists")
		}
	}

	if err := formItem.FillTo(parameter); err != nil {
		return err
	}
	parameter.UpdatedAt = time.Now()

	return a.Trans.Exec(ctx, func(ctx context.Context) error {
		if err := a.ParameterDAL.Update(ctx, parameter); err != nil {
			return err
		}
		return nil
	})
}

// Delete the specified parameter from the data access object.
func (a *Parameter) Delete(ctx context.Context, id string) error {
	exists, err := a.ParameterDAL.Exists(ctx, id)
	if err != nil {
		return err
	} else if !exists {
		return errors.NotFound("", "Parameter not found")
	}

	return a.Trans.Exec(ctx, func(ctx context.Context) error {
		if err := a.ParameterDAL.Delete(ctx, id); err != nil {
			return err
		}
		return nil
	})
}

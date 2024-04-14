package api

import (
	"github.com/gin-gonic/gin"
	"github.com/phpk/godo.cpp/internal/mods/parameter/biz"
	"github.com/phpk/godo.cpp/internal/mods/parameter/schema"
	"github.com/phpk/godo.cpp/pkg/util"
)

// System parameter management
type Parameter struct {
	ParameterBIZ *biz.Parameter
}

// @Tags ParameterAPI
// @Security ApiKeyAuth
// @Summary Query parameter list
// @Param current query int true "pagination index" default(1)
// @Param pageSize query int true "pagination size" default(10)
// @Param name query string false "Name of parameter"
// @Param status query string false "Status of parameter (enabled, disabled)"
// @Success 200 {object} util.ResponseResult{data=[]schema.Parameter}
// @Failure 401 {object} util.ResponseResult
// @Failure 500 {object} util.ResponseResult
// @Router /api/v1/parameters [get]
func (a *Parameter) Query(c *gin.Context) {
	ctx := c.Request.Context()
	var params schema.ParameterQueryParam
	if err := util.ParseQuery(c, &params); err != nil {
		util.ResError(c, err)
		return
	}

	result, err := a.ParameterBIZ.Query(ctx, params)
	if err != nil {
		util.ResError(c, err)
		return
	}
	util.ResPage(c, result.Data, result.PageResult)
}

// @Tags ParameterAPI
// @Security ApiKeyAuth
// @Summary Get parameter record by ID
// @Param id path string true "unique id"
// @Success 200 {object} util.ResponseResult{data=schema.Parameter}
// @Failure 401 {object} util.ResponseResult
// @Failure 500 {object} util.ResponseResult
// @Router /api/v1/parameters/{id} [get]
func (a *Parameter) Get(c *gin.Context) {
	ctx := c.Request.Context()
	item, err := a.ParameterBIZ.Get(ctx, c.Param("id"))
	if err != nil {
		util.ResError(c, err)
		return
	}
	util.ResSuccess(c, item)
}

// @Tags ParameterAPI
// @Security ApiKeyAuth
// @Summary Create parameter record
// @Param body body schema.ParameterForm true "Request body"
// @Success 200 {object} util.ResponseResult{data=schema.Parameter}
// @Failure 400 {object} util.ResponseResult
// @Failure 401 {object} util.ResponseResult
// @Failure 500 {object} util.ResponseResult
// @Router /api/v1/parameters [post]
func (a *Parameter) Create(c *gin.Context) {
	ctx := c.Request.Context()
	item := new(schema.ParameterForm)
	if err := util.ParseJSON(c, item); err != nil {
		util.ResError(c, err)
		return
	} else if err := item.Validate(); err != nil {
		util.ResError(c, err)
		return
	}

	result, err := a.ParameterBIZ.Create(ctx, item)
	if err != nil {
		util.ResError(c, err)
		return
	}
	util.ResSuccess(c, result)
}

// @Tags ParameterAPI
// @Security ApiKeyAuth
// @Summary Update parameter record by ID
// @Param id path string true "unique id"
// @Param body body schema.ParameterForm true "Request body"
// @Success 200 {object} util.ResponseResult
// @Failure 400 {object} util.ResponseResult
// @Failure 401 {object} util.ResponseResult
// @Failure 500 {object} util.ResponseResult
// @Router /api/v1/parameters/{id} [put]
func (a *Parameter) Update(c *gin.Context) {
	ctx := c.Request.Context()
	item := new(schema.ParameterForm)
	if err := util.ParseJSON(c, item); err != nil {
		util.ResError(c, err)
		return
	} else if err := item.Validate(); err != nil {
		util.ResError(c, err)
		return
	}

	err := a.ParameterBIZ.Update(ctx, c.Param("id"), item)
	if err != nil {
		util.ResError(c, err)
		return
	}
	util.ResOK(c)
}

// @Tags ParameterAPI
// @Security ApiKeyAuth
// @Summary Delete parameter record by ID
// @Param id path string true "unique id"
// @Success 200 {object} util.ResponseResult
// @Failure 401 {object} util.ResponseResult
// @Failure 500 {object} util.ResponseResult
// @Router /api/v1/parameters/{id} [delete]
func (a *Parameter) Delete(c *gin.Context) {
	ctx := c.Request.Context()
	err := a.ParameterBIZ.Delete(ctx, c.Param("id"))
	if err != nil {
		util.ResError(c, err)
		return
	}
	util.ResOK(c)
}

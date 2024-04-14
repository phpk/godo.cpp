package schema

import (
	"time"

	"github.com/phpk/godo.cpp/pkg/util"
)

// System parameter management
type Parameter struct {
	ID        string    `json:"id" gorm:"size:20;primaryKey;"` // Unique ID
	Name      string    `json:"name" gorm:"size:128;index"`    // Name of parameter
	Value     string    `json:"value" gorm:"size:1024;"`       // Value of parameter
	Remark    string    `json:"remark" gorm:"size:255;"`       // Remark of parameter
	Status    string    `json:"status" gorm:"size:20;index"`   // Status of parameter (enabled, disabled)
	CreatedAt time.Time `json:"created_at" gorm:"index;"`      // Create time
	UpdatedAt time.Time `json:"updated_at" gorm:"index;"`      // Update time
}

// Defining the query parameters for the `Parameter` struct.
type ParameterQueryParam struct {
	util.PaginationParam

	LikeName string `form:"name"`   // Name of parameter
	Status   string `form:"status"` // Status of parameter (enabled, disabled)
}

// Defining the query options for the `Parameter` struct.
type ParameterQueryOptions struct {
	util.QueryOptions
}

// Defining the query result for the `Parameter` struct.
type ParameterQueryResult struct {
	Data       Parameters
	PageResult *util.PaginationResult
}

// Defining the slice of `Parameter` struct.
type Parameters []*Parameter

// Defining the data structure for creating a `Parameter` struct.
type ParameterForm struct {
	Name   string `json:"name" binding:"required,max=128"`                  // Name of parameter
	Value  string `json:"value" binding:"max=1024"`                         // Value of parameter
	Remark string `json:"remark"`                                           // Remark of parameter
	Status string `json:"status" binding:"required,oneof=enabled disabled"` // Status of parameter (enabled, disabled)
}

// A validation function for the `ParameterForm` struct.
func (a *ParameterForm) Validate() error {
	return nil
}

// Convert `ParameterForm` to `Parameter` object.
func (a *ParameterForm) FillTo(parameter *Parameter) error {
	parameter.Name = a.Name
	parameter.Value = a.Value
	parameter.Remark = a.Remark
	parameter.Status = a.Status
	return nil
}

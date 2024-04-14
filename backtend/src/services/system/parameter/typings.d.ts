
declare namespace API {
  // System parameter management
  type Parameter = {
    /** Unique ID */
	  id?: string;
    /** Name of parameter */
	  name?: string;
    /** Value of parameter */
	  value?: string;
    /** Remark of parameter */
	  remark?: string;
    /** Status of parameter (enabled, disabled) */
	  status?: string;
    /** Create time */
	  created_at?: string;
    /** Update time */
	  updated_at?: string;
    statusChecked?: boolean;
  };
}

import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className='col d-flex flex-column align-items-center justify-content-center m-0'>
        <div className='form-group'>
          <Field
            className='form-control'
            type='text'
            name='text'
            component='input'
          />
        </div>
        <button
          disabled={pristine || submitting}
          className='btn btn-primary ml-2'
          style={{ height: '38px' }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

AddForm = reduxForm({ form: 'add' })(AddForm);

export default AddForm;

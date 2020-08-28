import React from 'react';
import { connect } from 'react-redux';
import { addSublist } from '../actions/todos';

const AddSublist = ({ addSublist }) => {

    const onSubmitForm = (e) => {
        e.preventDefault();
        let text = e.target.text.value.trim();
        if (!text) return;
        addSublist(text);
        e.target.reset();
    }

    return (
        <div data-test="component-form">
            <form data-test="form" onSubmit={onSubmitForm}>
                <input data-test="input-box" type="text" name="text" placeholder="Add a todo" />
                <input data-test="input-submit" type="submit" />
            </form>
        </div>
    );
}

export default connect(null, { addSublist } )(AddSublist);
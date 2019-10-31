import React from 'react';

const Rule = ({
  id,
  parentId,
  field,
  operator,
  value,
  translations,
  combinator,
  schema: {
    classNames,
    controls,
    fields,
    getInputType,
    getLevel,
    getOperators,
    getValueEditorType,
    getValues,
    onPropChange,
    onRuleRemove
  }
}) => {
  const onElementChanged = (property, value) => {
    onPropChange(property, value, id);
  };

  const onFieldChanged = (value) => {
    onElementChanged('field', value);
  };

  const onOperatorChanged = (value) => {
    onElementChanged('operator', value);
  };

  const onValueChanged = (value) => {
    onElementChanged('value', value);
  };

  const removeRule = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onRuleRemove(id, parentId);
  };

  const level = getLevel(id);

  return (
    <div className={`rule ${classNames.rule}`}>
      <controls.fieldSelector
        id={id}
        options={fields}
        title={translations.fields.title}
        value={field}
        className={`rule-fields ${classNames.fields}`}
        handleOnChange={onFieldChanged}
        level={level}
        combinator={combinator}
      />
      <controls.operatorSelector
        id={id}
        field={field}
        title={translations.operators.title}
        options={getOperators(field)}
        value={operator}
        className={`rule-operators ${classNames.operators}`}
        handleOnChange={onOperatorChanged}
        level={level}
        combinator={combinator}
      />
      <controls.valueEditor
        id={id}
        field={field}
        title={translations.value.title}
        operator={operator}
        value={value}
        type={getValueEditorType(field, operator)}
        inputType={getInputType(field, operator)}
        values={getValues(field, operator)}
        className={`rule-value ${classNames.value}`}
        handleOnChange={onValueChanged}
        level={level}
        combinator={combinator}
      />
      <controls.removeRuleAction
        id={id}
        label={translations.removeRule.label}
        title={translations.removeRule.title}
        className={`rule-remove ${classNames.removeRule}`}
        handleOnClick={removeRule}
        level={level}
        combinator={combinator}
      />
    </div>
  );
};

Rule.defaultProps = {
  id: null,
  parentId: null,
  field: null,
  operator: null,
  value: null,
  schema: null
};

Rule.displayName = 'Rule';

export default Rule;

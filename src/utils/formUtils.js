export function updateFormState(fieldName, value, formState, setFormState) {
  setFormState({
    ...formState,
    [fieldName]: value,
  });
}

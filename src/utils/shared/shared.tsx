export function helperFunction(
  state: Record<string, any>,
  fieldNames: Array<string>,
  fieldsData: Record<string, any>,
  reset?: boolean
): object {
  const updatedState = state;
  //to reset everything inside the given field , this will not reset the whole store but only reset the given fieldname
  if (reset) {
    fieldNames.forEach((name: string) => {
      updatedState[name] = {};
    });
  }
  fieldNames.forEach((name: string) => {
    updatedState[name] = { ...updatedState[name], ...fieldsData[name] };
  });
  return updatedState;
}

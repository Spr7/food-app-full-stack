import { StateCreator } from "zustand";
import { createAppStore } from "../zustand/zustand";
import { helperFunction } from "../shared/shared";
import { FORM_STATE, USER_DETAILS } from "../constants/constants";

const initialState: any = {
  [USER_DETAILS]: {
    userName: "",
    email: "",
    password: "",
  },
  [FORM_STATE]: {
    formState: "Sign Up",
  },
  shopStoreInitialization: () => {},
  setFormState: () => {},
};

const SearchFormStore: StateCreator<any> = (set) => {
  return {
    ...initialState,
    // Initialize search form from session data
    shopStoreInitialization: () => {
      const initialData = "hello....";
      set(() => ({ initialData }));
    },

    //Search Form context setter methods
    setFormState: (
      fieldNamesArray: Array<string>,
      fieldsData: any,
      reset?: boolean
    ) =>
      set((state: any) => {
        const updatedState = helperFunction(
          state,
          fieldNamesArray,
          fieldsData,
          reset
        );
        return updatedState;
      }),
  };
};

export const useSearchFormStore = createAppStore(SearchFormStore, {
  usePersistentStore: false,
});

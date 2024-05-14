import { StoreApi, create, UseBoundStore, StateCreator } from "zustand";
import { PersistStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const addMiddleWares = <T>(
  creator: StateCreator<T>,
  options: StoreOptions<T> = {
    usePersistentStore: false,
    persistentStoreName: "",
    useLocalStorage: false,
  }
) => {
  let wrapperCreator:
    | StateCreator<T>
    | StateCreator<T, [], [["zustand/immer", never]]>
    | StateCreator<T, [["zustand/immer", never]], []>
    | StateCreator<T, [], [["zustand/devtools", T]]>
    | StateCreator<T, [], [["zustand/persist", T]]>
    | StateCreator<
        T,
        [],
        [["zustand/devtools", never], ["zustand/persist", T]]
      > = creator;

  // persist
  if (options.usePersistentStore && options.persistentStoreName) {
    if (!options.persistentStoreName) {
      throw new Error("PersistentStore initalized ");
    }
    wrapperCreator = persist(wrapperCreator, {
      name: options.persistentStoreName || "",
      skipHydration: true,
      getStorage: () =>
        options.useLocalStorage ? localStorage : sessionStorage,
    });
  }
  // devtools
  if (process.env["NODE_ENV"] === "development") {
    wrapperCreator = devtools(wrapperCreator as StateCreator<T>);
  }
  wrapperCreator = immer(
    wrapperCreator as StateCreator<T, [["zustand/immer", never]], []>
  );
  return wrapperCreator;
};

type StoreOptions<T> = {
  usePersistentStore: boolean;
  persistentStoreName?: string;
  customStorage?: PersistStorage<T>;
  useLocalStorage?: boolean;
};

export const createAppStore = <T>(
  initState: StateCreator<T>,
  options?: StoreOptions<T>
): UseBoundStore<StoreApi<T>> => {
  return create<T>()(
    addMiddleWares(initState, options) as unknown as StateCreator<T>
  );
};

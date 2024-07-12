import AsyncStorage from '@react-native-async-storage/async-storage';

type Storage<T> = {
  get: (force?: boolean) => Promise<T>;
  set: (data: T) => Promise<void>;
};

function createStorage<T>(key: string): Storage<T> {
  let cache: T | null = null;

  async function invalidateCache(): Promise<void> {
    let nextList: T;
    try {
      nextList = JSON.parse((await AsyncStorage.getItem(key)) || '') as T;
    } catch (ex) {
      console.warn('fail to parse');
      nextList = null as any;
    }
    console.warn(nextList);
    console.log(JSON.stringify(nextList));
    cache = nextList;
  }

  async function get(force = false): Promise<T> {
    if (cache === null || force) {
      await invalidateCache();
    }

    return cache as T;
  }

  async function set(data: T): Promise<void> {
    const stringData = typeof data === 'string' ? data : JSON.stringify(data);
    await AsyncStorage.setItem(key, stringData);
    await invalidateCache();
  }

  return {
    get,
    set,
  };
}

export { createStorage };

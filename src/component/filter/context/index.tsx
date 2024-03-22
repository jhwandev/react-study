import { Reducer, createContext } from 'react';

/**
 * [type] filter State
 * searchText : input에 들어갈 검색값
 * findText : 실제 필터될 검색값 배열
 */
export type FilterState = {
  searchText: string;
  findText: string[];
};

/**
 * [enum] ActionType
 */
export enum FilterActionType {
  UPDATE_ALL,
  UPDATE_SEARCH_TEXT,
  ADD_FIND_TEXT,
}

/**
 * Action을 정의할 타입
 */
export type FilterAction =
  | {
      type: FilterActionType.UPDATE_ALL;
      payload: FilterState;
    }
  | {
      type: FilterActionType.UPDATE_SEARCH_TEXT;
      searchText: string;
    }
  | {
      type: FilterActionType.ADD_FIND_TEXT;
      findText: string[];
    };

// Context
export type FilterContext = [FilterState, React.Dispatch<FilterAction>];
export const initialState: FilterState = {
  searchText: '',
  findText: [],
};
export const FilterContext = createContext<FilterContext>([{ ...initialState }, () => {}]);

// Reducer
export const filterReducer: Reducer<FilterState, FilterAction> = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionType.UPDATE_ALL: {
      const { payload } = action;
      return {
        ...payload,
      };
    }
    case FilterActionType.UPDATE_SEARCH_TEXT: {
      const { searchText } = action;
      return {
        ...state,
        searchText,
      };
    }
    case FilterActionType.ADD_FIND_TEXT: {
      const { findText } = action;
      return {
        ...state,
        findText: [...new Set([...state.findText, ...findText])]
      };
    }
  }
};

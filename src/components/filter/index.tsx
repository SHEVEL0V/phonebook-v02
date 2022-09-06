/** @format */

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Select from "react-select";
import { favoriteFilter } from "redux/filter/selectors";
import { updateFavorite } from "redux/filter/slise";
import { limitSel } from "redux/pagination/selectors";
import { updateLimit, updatePage } from "redux/pagination/slice";

import s from "./style.module.css";

const Filter: React.FC = () => {
  const favorite = useAppSelector(favoriteFilter);
  const limit = useAppSelector(limitSel);
  const dispatch = useAppDispatch();

  const optionsLimit = [
    { value: 2, label: "2" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];

  const defaultValueFavorite = () => {
    return optionsLimit.find((el) => el.value === limit);
  };

  return (
    <div className={s.thamb}>
      <h3 className={s.text}>Filter contacts:</h3>
      <div className={s.itemFilter}>
        <b>Limit</b>
        <Select
          className={s.select}
          options={optionsLimit}
          value={defaultValueFavorite()}
          onChange={(e) => {
            if (e) {
              dispatch(updateLimit(e.value));
              dispatch(updatePage(1));
            }
          }}
        />
      </div>
      <label className={s.itemFilter}>
        Option favorite -
        <input
          className={s.checkbox}
          type="checkbox"
          value={String(favorite)}
          onClick={() => {
            dispatch(updateFavorite(!favorite));
            dispatch(updatePage(1));
          }}
        ></input>
      </label>
    </div>
  );
};

export default Filter;

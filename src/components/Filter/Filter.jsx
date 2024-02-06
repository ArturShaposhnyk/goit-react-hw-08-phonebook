import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "Store/SliceFilter";
import { getFilter } from "Store/Selectors";
import css from './Filter.module.css'

const Filter = function () {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <label className={css.label}>
            Find contacts by name
            <input
                type="text"
                name="filter"
                placeholder="Please enter a name"
                className={css.input}
                value={filter}
                onChange={e => dispatch(filterContacts(e.currentTarget.value))} />
        </label>
    )
};

export default Filter;
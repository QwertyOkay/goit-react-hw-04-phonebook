import PropTypes from 'prop-types';
import styles from './Filter.module.css'

export const Filter = ({ filter, changeFilter }) => {
    return (
        <label className={styles.filterLabel}>
            <span >
                Find contacts by name
            </span>
            <input
                value={filter}
                onChange={e => changeFilter(e.target.value)}
            />
        </label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}
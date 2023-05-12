import PropTypes from 'prop-types';
import { SearchLabel, Label, Input } from './Filter.styled';


const Filter = ({ value, onChange }) => (
    <SearchLabel>
        <Label> Find contact</Label>
        <Input type="text" value={value} onChange={onChange} placeholder="search"/>
    </SearchLabel>
);

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}
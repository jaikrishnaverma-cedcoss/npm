import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, Card, Chip, FormGroup, Stack } from "@mui/material";
import DI from "../../../utility/DependenciesInjection";
import { noRef, toTitleCase } from "../../../utility/tools";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ExpenseForm = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const {
    di: { FAKE, session, error, navigate },
  } = props;
  const [formdata, setformData] = React.useState({
    collabrators: [noRef(session)],
  });

  console.log({ users });
  const fetchUsers = () => {
    setLoading(true);
    FAKE("users").then((res) => {
      if (res.success) {
        setUsers(
          res.data.map((el) => {
            return { ...el, title: el.firstName };
          })
        );
      } else {
        error(res?.msg);
      }
      setLoading(false);
    });
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Stack spacing={{ xs: 3, sm: 2 }} direction="column" useFlexGap>
      <Autocomplete
        limitTags={3}
        loading={true}
        defaultValue={[{ ...session }]}
        sx={{ maxWidth: "100%" }}
        multiple
        loadingText={loading}
        id="checkboxes-tags-demo"
        options={users}
        value={formdata.collabrators}
        disableCloseOnSelect
        getOptionLabel={(option) => option.firstName}
        onChange={(event, newValue) => {
          setformData({
            ...formdata,
            collabrators: [
              ...[session],
              ...newValue.filter((option) => session.id !== option.id),
            ],
          });
        }}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option.firstName}
              {...getTagProps({ index })}
              disabled={session.id === option.id}
            />
          ))
        }
        renderOption={(props, option, { selected }) => (
          <li {...(session.id === option.id ? {} : { ...props })}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              disabled={session.id === option.id}
              checked={session.id === option.id || selected}
            />
            {toTitleCase(option.firstName)}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Add Collabrators"
            placeholder="Collabrators"
          />
        )}
      />
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="success">
        Add Expense
      </Button>
    </Stack>
  );
};
export default DI(ExpenseForm);

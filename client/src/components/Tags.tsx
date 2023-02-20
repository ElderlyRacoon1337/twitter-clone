import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectTagsItems,
  selectIsLoadingState,
} from '../store/ducks/tags/selectors';

const Tags: React.FC = (): React.ReactElement => {
  const tags = useSelector(selectTagsItems);
  const tagsIsLoading = useSelector(selectIsLoadingState);

  return (
    <Stack
      sx={{
        bgcolor: grey[100],
        borderRadius: '20px',
        mt: '20px',
        p: '5px 0',
        minHeight: '300px',
      }}
    >
      <Typography variant="h6" fontWeight={'bold'} sx={{ pt: 2, pl: 2 }}>
        Актуальные темы
      </Typography>
      {!tagsIsLoading && (
        <List sx={{ position: 'relative' }}>
          {tags.map((el, i) => (
            <Link
              key={i}
              to={`/search?tag=${el.title}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton
                sx={{ borderBottom: '1px solid', borderColor: grey[300] }}
              >
                <ListItemText
                  color="primary"
                  primary={el.title}
                  secondary={`Твитов: ${el.count}`}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      )}
    </Stack>
  );
};

export default Tags;
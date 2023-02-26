import {
  CircularProgress,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectTagsItems,
  selectIsLoadingState,
} from '../redux/ducks/tags/selectors';

const Tags: React.FC = (): React.ReactElement => {
  const tags = useSelector(selectTagsItems);
  const tagsIsLoading = useSelector(selectIsLoadingState);

  return (
    <Stack
      sx={{
        bgcolor: 'customGrey',
        borderRadius: '20px',
        mt: '20px',
        p: '5px 0',
        minHeight: '300px',
        position: 'relative',
      }}
    >
      <Typography
        variant="h6"
        fontWeight={'bold'}
        sx={{ py: 1, pl: 2, borderBottom: '1px solid', borderColor: 'divider' }}
      >
        Актуальные темы
      </Typography>
      {!tagsIsLoading ? (
        <List sx={{ position: 'relative' }}>
          {tags.map((el, i) => (
            <Link
              key={i}
              to={`/search?tag=${el.title}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton
                sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
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
      ) : (
        <CircularProgress
          sx={{
            zIndex: 1,
            color: 'primary.main',
            position: 'absolute',
            m: 'auto',
            height: '50px',
            width: '50px',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
    </Stack>
  );
};

export default Tags;

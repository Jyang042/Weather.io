// src/assets/styles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px 0',
    padding: '20px',
    background: 'linear-gradient(to bottom right, #2196F3, #21CBF3)',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  backdrop: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '15px',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  switchLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  carousel: {
    '& .slick-slide': {
      padding: '0 10px',
    },
  },
  detailedView: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
}));

export default useStyles;

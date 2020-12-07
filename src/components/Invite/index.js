import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as globalConstants from 'utils/constants';

const { THEME_COLORS } = globalConstants;

const useStyles = makeStyles(() => ({
  invite: {
    background: 'linear-gradient(90.06deg, #181716 0%, #ED4E08 99.97%)',
  },
  inviteText: {
    color: THEME_COLORS.WHITE,
  },
  inviteButton: {
    background: THEME_COLORS.WHITE,
    textTransform: 'none',
    '&:hover': {
      background: THEME_COLORS.WHITE,
    },
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

function Invite() {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={styles.invite}
      padding={2}
    >
      <Typography className={styles.inviteText}>
        Invite friends to Big Fashion Festival & get up to $150 MynCash for
        every person who visits
      </Typography>
      <Box ml={2}>
        <Button className={styles.inviteButton}>Invite Now</Button>
      </Box>
    </Box>
  );
}

export default Invite;

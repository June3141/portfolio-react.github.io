import React from 'react';
import { Button, Link, Typography } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const GithubLink: React.FC = () => {
  return (
    <div>
      <Link>
        <Button>
          <GitHubIcon />
          Github
        </Button>
      </Link>
    </div>
  );
};

const TwitterLink: React.FC = () => {
  return (
    <div>
      <Link>
        <Button>
          <TwitterIcon />
          Twitter
        </Button>
      </Link>
    </div>
  );
};

export const SnsLinks: React.FC = () => {
  return (
    <div>
      <Typography> SNS contacs</Typography>
      <TwitterLink />
      <GithubLink />
    </div>
  );
};

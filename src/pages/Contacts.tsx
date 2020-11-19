import { Typography } from '@material-ui/core';
import React from 'react';

import { MailForm } from 'src/components/Contacts/MailForm';
import { SnsLinks } from '../components/Contacts/SnsLinks';

export const Contacts: React.FC = () => {
  return (
    <div className="Contacts">
      <Typography> Hi, this is the contact page.</Typography>
      <SnsLinks />
      <MailForm />
    </div>
  );
};

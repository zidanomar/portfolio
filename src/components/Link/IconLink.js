import { Icon, Link } from '@chakra-ui/react';
import React from 'react';

function IconLink({ icon, href, target = '_blank' }) {
  return (
    <Link w={[6, 10]} h={[6, 10]} href={href} target={target}>
      <Icon
        as={icon}
        w={[6, 10]}
        h={[6, 10]}
        sx={{
          ':hover': { cursor: 'pointer' },
          path: { transition: 'all 300ms ease' },
          ':hover > path': { fill: 'brand.primary' },
        }}
      />
    </Link>
  );
}

export default IconLink;

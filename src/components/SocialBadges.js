import React from 'react';
import authors from '@site/blog/authors.yml';
import IconLinkedIn from '@theme/Icon/Socials/LinkedIn';
import IconGitHub from '@theme/Icon/Socials/GitHub';
import IconEmail from '@theme/Icon/Socials/Email';
import Badge from './Badge';

const brandIconStyle = {
  verticalAlign: 'middle',
	marginRight: '5px',
  marginTop: '-3px',
  width: '1.1em',
  height: '1.1em',
  fill: 'currentColor',
};

const iconStyle = {
  verticalAlign: 'middle',
	marginRight: '5px',
  marginTop: '-3px',
  width: '1.1em',
  height: '1.1em',
};

const iconMap = {
  github: { icon: IconGitHub, label: 'GitHub', style: brandIconStyle, getUrl: (handle) => `https://github.com/${handle}` },
  linkedin: { icon: IconLinkedIn, label: 'LinkedIn', style: brandIconStyle, getUrl: (handle) => `https://linkedin.com/in/${handle}` },
  email: { icon: IconEmail, label: 'Email', style: iconStyle, getUrl: (handle) => `mailto:${handle}` },
};

export default function SocialLinks({ author = 'william' }) {
  const { socials } = authors[author];

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '1.5rem 0', justifyContent: 'center'}}>
      {Object.entries(socials).map(([key, handle], i) => {
        const entry = iconMap[key];
        if (!entry) return null;
        const Icon = entry.icon;
				return (
          <a key={key} href={entry.getUrl(handle)} target="_blank" style={{ textDecoration: 'none' }}>
            <Badge>
              <Icon style={entry.style} />
              {entry.label}
            </Badge>
          </a>
        );
      })}
    </div>
  );
}

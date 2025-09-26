import type { ComponentType, SVGProps } from 'react';

import Instagram from '../assets/icons/instagram.svg?react';
import Linkedin from '../assets/icons/linkedin.svg?react';
import Facebook from '../assets/icons/facebook.svg?react';

// On définit le type d'un composant d'icône
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS_LIST: Record<string, IconComponent> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

function getIcon(name: string, props?: SVGProps<SVGSVGElement>) {
  const Icon = ICONS_LIST[name];
  return Icon ? <Icon {...props} style={{ height: 24, width: 24 }} /> : null;
}

export { getIcon };

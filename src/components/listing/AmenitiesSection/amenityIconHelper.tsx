import React from 'react';
import {
  KitchenIcon,
  WifiIcon,
  PoolIcon,
  HotTubIcon,
  WorkspaceIcon,
  ParkingIcon,
  PetsIcon,
  SecurityCameraIcon,
  SmokeAlarmIcon,
  CarbonMonoxideAlarmIcon,
  TvIcon,
  AcIcon,
  BalconyIcon,
  ElevatorIcon,
  WasherIcon,
  CleanlinessIcon,
} from '../../common/Icons';

export function renderAmenityIcon(iconName: string, size: number = 24): React.ReactNode {
  switch (iconName.toLowerCase()) {
    case 'kitchen':
    case 'fridge':
    case 'microwave':
    case 'cookware':
    case 'dishes':
    case 'freezer':
    case 'stove':
    case 'kettle':
    case 'coffee':
    case 'wine':
    case 'toaster':
    case 'table':
      return <KitchenIcon size={size} />;
    case 'wifi':
      return <WifiIcon size={size} />;
    case 'pool':
    case 'resort':
      return <PoolIcon size={size} />;
    case 'hottub':
      return <HotTubIcon size={size} />;
    case 'workspace':
      return <WorkspaceIcon size={size} />;
    case 'parking':
      return <ParkingIcon size={size} />;
    case 'pets':
      return <PetsIcon size={size} />;
    case 'securitycamera':
      return <SecurityCameraIcon size={size} />;
    case 'smokealarm':
      return <SmokeAlarmIcon size={size} />;
    case 'carbonmonoxidealarm':
      return <CarbonMonoxideAlarmIcon size={size} />;
    case 'tv':
    case 'music':
      return <TvIcon size={size} />;
    case 'ac':
    case 'fan':
      return <AcIcon size={size} />;
    case 'balcony':
    case 'chair':
    case 'dining':
      return <BalconyIcon size={size} />;
    case 'elevator':
      return <ElevatorIcon size={size} />;
    case 'washer':
    case 'laundry':
      return <WasherIcon size={size} />;
    case 'cleanliness':
    case 'bathroom':
    case 'hotwater':
      return <CleanlinessIcon size={size} />;
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}

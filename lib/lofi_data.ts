import {
  Cloud,
  Wind,
  Coffee,
  Flame,
  Bird,
  Radio,
  Keyboard,
  Car,
  Waves,
  Building2,
  Train,
  Store,
  Moon,
} from 'lucide-react'
import { Channel, SoundEffect } from '@/types/lofi'

export const DEFAULT_CHANNELS: Channel[] = [
  {
    name: 'Lofi Girl',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    description: 'Beats to relax/study to',
    creator: 'Lofi Girl',
  },
  {
    name: 'Chillhop Radio',
    url: 'https://www.youtube.com/watch?v=5yx6BWlEVcY',
    description: 'jazzy & lofi hip hop beats',
    creator: 'Chillhop Music',
  },
  {
    name: 'Chilled Raccoon',
    url: 'https://www.youtube.com/watch?v=7NOSDKb0HlU',
    description: 'late night lofi mix',
    creator: 'Chilled Raccoon',
  },
  {
    name: 'Smooth Jazz',
    url: 'https://www.youtube.com/watch?v=HhqWd3Axq9Y',
    description: 'warm jazz music at coffee shop',
    creator: 'Relax Jazz Cafe',
  },
  {
    name: 'Tokyo night drive',
    url: 'https://www.youtube.com/watch?v=Lcdi9O2XB4E',
    description: 'lofi hiphop + chill + beats',
    creator: 'Tokyo Tones',
  },
  {
    name: 'Japan Cafe Vibe',
    url: 'https://www.youtube.com/watch?v=bRnTGwCbr3E',
    description: 'Lofi Music to sleep,relax,study...',
    creator: 'Healing Me',
  },
]

export const channels: Channel[] = [...DEFAULT_CHANNELS]

export const soundEffects: SoundEffect[] = [
  // Hong Kong Sound Effects
  {
    id: 'hk_street',
    name: 'Hong Kong Street',
    file: 'https://www.youtube.com/watch?v=lavsYcooDg0',
    icon: Building2,
  },
  {
    id: 'sham_shui_po',
    name: 'Sham Shui Po',
    file: 'https://www.youtube.com/watch?v=_GPwDqKpysI',
    icon: Store,
  },
  {
    id: 'train_ride',
    name: 'Train Ride',
    file: 'https://www.youtube.com/watch?v=XX-Lv7-oEdY',
    icon: Train,
  },
  {
    id: 'market',
    name: 'Market',
    file: 'https://www.youtube.com/watch?v=S6pqB7YQVRc',
    icon: Store,
  },
  {
    id: 'causeway_bay',
    name: 'Causeway Bay',
    file: 'https://www.youtube.com/watch?v=MHW7qjGW540',
    icon: Building2,
  },
  {
    id: 'wan_chai_night',
    name: 'Wan Chai Night',
    file: 'https://www.youtube.com/watch?v=uLMC6bL_q38',
    icon: Moon,
  },
  // Default Sound Effects
  {
    id: 'rain',
    name: 'Rain',
    file: 'https://www.youtube.com/watch?v=mPZkdNFkNps',
    icon: Cloud,
  },
  {
    id: 'fire',
    name: 'Fireplace',
    file: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    icon: Flame,
  },
  {
    id: 'cafe',
    name: 'Cafe Ambiance',
    file: 'https://www.youtube.com/watch?v=h2zkV-l_TbY',
    icon: Coffee,
  },
  {
    id: 'wind',
    name: 'Wind',
    file: 'https://youtu.be/sGkh1W5cbH4?si=L3aMNvyIYASQlYll',
    icon: Wind,
  },
  {
    id: 'birds',
    name: 'Birds',
    file: 'https://www.youtube.com/watch?v=Qm846KdZN_c',
    icon: Bird,
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    file: 'https://youtu.be/-2RiNR2fqRY?si=Er2L4D8MufctAgeE',
    icon: Keyboard,
  },
  {
    id: 'city',
    name: 'City Traffic',
    file: 'https://www.youtube.com/watch?v=8s5H76F3SIs',
    icon: Car,
  },
  {
    id: 'waves',
    name: 'Ocean Waves',
    file: 'https://www.youtube.com/watch?v=bn9F19Hi1Lk',
    icon: Waves,
  },
  {
    id: 'whitenoise',
    name: 'White Noise',
    file: 'https://www.youtube.com/watch?v=nMfPqeZjc2c',
    icon: Radio,
  },
]

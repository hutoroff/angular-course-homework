type Resort = {
  'name': string,
  'img': string,
  'thumbImg': string,
  'address': string,
  'phone': number,
  'weather': Weather,
  'social_info': SocialInfo,
  'type': string
};

type Weather = {
  'title': string,
  'icon': string,
  'water': number,
  'temperature': number
};

type SocialInfo = {
  'title': string,
  'img': string,
  'followers': number,
  'following': number
};

import type { Schema, Attribute } from '@strapi/strapi';

export interface TracksTracks extends Schema.Component {
  collectionName: 'components_tracks_tracks';
  info: {
    displayName: 'tracks';
    icon: 'music';
    description: '';
  };
  attributes: {
    track: Attribute.Relation<'tracks.tracks', 'oneToOne', 'api::track.track'>;
    completed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tracks.tracks': TracksTracks;
    }
  }
}

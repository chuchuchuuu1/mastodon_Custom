import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import ColumnLink from './column_link';

// 만약 unreadDMCount를 props 또는 상태에서 받아온다면 아래처럼 선언
// 예시: const unreadDMCount = 3;
const unreadDMCount = 3; // ← 실제 서비스에서는 상태나 props에서 받아야 함

const messages = defineMessages({
  home: { id: 'navigation.home', defaultMessage: 'Home' },
  notifications: { id: 'navigation.notifications', defaultMessage: 'Notifications' },
  direct: { id: 'navigation.direct', defaultMessage: 'Direct' },
  favourites: { id: 'navigation.favourites', defaultMessage: 'Favourites' },
  bookmarks: { id: 'navigation.bookmarks', defaultMessage: 'Bookmarks' },
  explore: { id: 'navigation.explore', defaultMessage: 'Explore' },
  lists: { id: 'navigation.lists', defaultMessage: 'Lists' },
  profile: { id: 'navigation.profile', defaultMessage: 'Profile' },
  settings: { id: 'navigation.settings', defaultMessage: 'Settings' },
  more: { id: 'navigation.more', defaultMessage: 'More' },
});

const NavigationPanel = ({ intl }) => (
  <nav className="sidebar__nav">
    <ColumnLink
      icon="home"
      to="/"
      label={intl.formatMessage(messages.home)}
      exact
    />
    <ColumnLink
      icon="bell"
      to="/notifications"
      label={intl.formatMessage(messages.notifications)}
    />
    <ColumnLink
      icon="envelope"
      to="/direct"
      label={intl.formatMessage(messages.direct)}
      badge={unreadDMCount > 0 ? unreadDMCount : null} // 뱃지로 숫자 표시
    />
    <ColumnLink
      icon="star"
      to="/favourites"
      label={intl.formatMessage(messages.favourites)}
    />
    <ColumnLink
      icon="bookmark"
      to="/bookmarks"
      label={intl.formatMessage(messages.bookmarks)}
    />
    <ColumnLink
      icon="hash"
      to="/explore"
      label={intl.formatMessage(messages.explore)}
    />
    <ColumnLink
      icon="list"
      to="/lists"
      label={intl.formatMessage(messages.lists)}
    />
    <ColumnLink
      icon="user"
      to="/profile"
      label={intl.formatMessage(messages.profile)}
    />
    <ColumnLink
      icon="settings"
      to="/settings"
      label={intl.formatMessage(messages.settings)}
    />
    <ColumnLink
      icon="more-horizontal"
      to="/more"
      label={intl.formatMessage(messages.more)}
    />
  </nav>
);

NavigationPanel.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(NavigationPanel);

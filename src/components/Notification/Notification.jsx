import ProtoTypes from 'prop-types';

const Notification = ({ mess }) => {
  return <p>{mess}</p>;
};

Notification.protoTypes = { mess: ProtoTypes.string };

export default Notification;

export const TopMeetRow = ({ meet }: { meet: Meet }) => {
  return (
    <div key={meet[0].id}>
      <p>
        <b>{meet[0].title}</b>
      </p>
      <p>
        {meet.duration} hour{meet.duration > 1 && 's'}
        {meet.length > 1 && `, ${meet.length} occurences`}
      </p>
    </div>
  );
};

export default TopMeetRow;

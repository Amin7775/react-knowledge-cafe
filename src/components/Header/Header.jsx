import Profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b-2 mb-5'>
      <h3 className="text-4xl font-bold">Knowledge Cafe</h3>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;

import PropTypes from  'prop-types'
const CallToActionCard = ({title,text,button}) => {
  return (
    <div id='callToActionCard' className="flex flex-col space-y-5">
        <p className='bubbleGum text-3xl font-bold text-headColor'>{title}</p>
        <p className='text-lg font-light lato text-black'>{text}</p>
        <button className='w-fit h-fit px-8 py-3 rounded-sm hover:rounded-full hover:bg-opacity-0 hover:text-headColor hover:outline bg-headColor'>{button}</button>
    </div>
  )
}

CallToActionCard.propTypes={
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    button: PropTypes.string
}
export default CallToActionCard

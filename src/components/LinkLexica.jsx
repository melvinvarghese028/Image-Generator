export const LinkLexica = ({ searchWordText }) => {
    return (
      <div className='w-full grid place-content-center'>
        <a
          href={`https://lexica.art/?q=${searchWordText}`}
          target='_blank'
          className='inline-block   pl-2 pr-2 mt-16 underline text-center hover:opacity-80 text-white/60 text-xl mb-16'
          rel='noreferrer'
        >
          See more images of "{searchWordText}" on the official page
        </a>
      </div>
    )
  }
  
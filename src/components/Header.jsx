import styled from 'styled-components'
import imgLogo from '../assets/icons/logo.webp'
import FavIcon from '@mui/icons-material/FavoriteBorder'
import { device } from '../responsive'
import LinkButton from './ui/LinkButton'
import { Link } from 'react-router-dom'

const Head = styled.header`
  width: 100%;
  height: 4em;
  background-color: #111;
  background-color: ${(props) => props.$Home && 'rgb(0, 0, 0)'};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--paddinginline);
  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(10px, 10px));
    padding-inline: 1em;
  }
`

const Logo = styled.img`
  width: 150px;

  @media ${device.mobile} {
    width: 130px;
  }
`

const CtnRightBar = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  height: 100%;
  justify-content: end;
  z-index: 9;
  @media (max-width: 700px) {
    .hide-mobile {
      display: none;
    }
  }
`

export default function Header() {
  return (
    <>
      <Head>
        <Link className='w-max' title='Home' to={'/'}>
          <Logo src={imgLogo} alt='' />
        </Link>
        <CtnRightBar>
          <LinkButton
            className={'hide-mobile'}
            to={'/product/scooters'}
            text={'Monopatines'}
          />
          <LinkButton
            id={'fav-btn'}
            to={'/favorites'}
            logo={<FavIcon></FavIcon>}
            title={'Favoritos'}
          />
          <Link>Ingresar</Link>
          <Link>Registrarse</Link>

        </CtnRightBar>
      </Head>
    </>
  )
}

export function SearchBar() {
  return (
    <>
      <div className='relative flex h-max w-max items-center justify-start'>
        <input
          type='text'
          className='text-red peer rounded-xl border-[1px] 
    border-transparent bg-gray-800 px-3 py-2 caret-primary
    outline-none focus-visible:border-primary'
          placeholder=' '
        />
        <p
          className='pointer-events-none absolute -translate-y-8 px-3 
  font-bold text-slate-300 duration-300 peer-placeholder-shown:translate-y-0
   peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 
   peer-focus:-translate-y-8 peer-focus:font-bold peer-focus:text-slate-300'
        >
          Email
        </p>
      </div>
    </>
  )
}

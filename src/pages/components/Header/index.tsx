import styles from './styles.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { ActiveLink } from '../ActiveLink';

import logo from '../../../../public/images/logo.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src={logo} alt="Logo Sujeito Programador"></Image>
        </Link>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active} legacyBehavior>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            href="/conteudos"
            activeClassName={styles.active}
            legacyBehavior
          >
            <a>Conteúdos</a>
          </ActiveLink>
          <ActiveLink
            href="/sobre"
            activeClassName={styles.active}
            legacyBehavior
          >
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <Link
          className={styles.readyButton}
          type="button"
          href="https://sujeitoprogramador.com/"
        >
          Começar
        </Link>
      </div>
    </header>
  );
}

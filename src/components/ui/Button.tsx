import clsx from 'clsx';
import styles from './button.module.css';

interface ButtonProps {
  buttonText: string,
  size?: string
  onClick: () => void,
}

function Button({ buttonText, size = 'md', ...restProps}: ButtonProps) {
  console.log("Button render")
  return (
    <button 
      // className={`block bg-white ${styles.button} ${size === 'md' && styles.buttonMd}`} 
      className={clsx(
        'block bg-white',
        styles.button,
        size === 'md' && styles.buttonMd,
        size === 'lg' && styles.buttonLg,
      )}
      {...restProps}
    >
      {buttonText}
    </button>
  )
}

export default Button
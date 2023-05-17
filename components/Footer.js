import Layout from "./Layout";

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-indigo font-medium text-lg
     dark:text-light sm:text-base mt-4'>
        <Layout className='py-6 flex items-center justify-center xl:py-5 lg:py-4 md:py-3 sm:py-2'>
            <span>Copyright &copy; All Rights Reserved {new Date().getFullYear()} Vanessa Foerster</span>
        </Layout>
    </footer>
  );
}

export default Footer;
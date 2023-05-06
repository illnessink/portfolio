import Layout from "./Layout";

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-indigo font-medium text-lg'>
        <Layout className='py-6 flex items-center justify-center'>
            <span>Copyright &copy; All Rights Reserved {new Date().getFullYear()} Vanessa Foerster</span>
        </Layout>
    </footer>
  );
}

export default Footer;
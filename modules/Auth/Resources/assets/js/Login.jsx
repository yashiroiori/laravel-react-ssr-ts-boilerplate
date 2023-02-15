import { useEffect, useState } from 'react'
import { Head, Link, useForm } from '@inertiajs/react';
import PageContainer from '@/Components/Admin/page-container/PageContainer';
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, CoreInput, Icon, PreviewCard } from '@/Components/Admin/Component';
import { Form, Spinner } from 'reactstrap';

const Login = () => {
    const [passState, setPassState] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: 'admin@email.com',
        password: 'secret',
        remember: false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    }
    useEffect(() => {
        console.log(errors)
    }, [errors])
    
    return (
        <>
            <Head title="Iniciar sesión" />
            <PageContainer>
                <Block className="nk-block-middle nk-auth-body  wide-xs">
                    <div className="brand-logo pb-4 text-center">
                        <Link href="" className="logo-link">
                            <img className="logo-light logo-img logo-img-lg" src="/storage/admin/images/logo.png" alt="logo" />
                            <img className="logo-dark logo-img logo-img-lg" src="/storage/admin/images/logo-dark.png" alt="logo-dark" />
                        </Link>
                    </div>
                    <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                        <BlockHead>
                            <BlockContent>
                                <BlockTitle tag="h4">Sign-In</BlockTitle>
                                <BlockDes>
                                    <p>Access Dashlite using your email and passcode.</p>
                                </BlockDes>
                            </BlockContent>
                        </BlockHead>
                        {/* {
                            errorVal && (
                                <div className="mb-3">
                                    <Alert color="danger" className="alert-icon">
                                        {" "}
                                        <Icon name="alert-circle" /> Unable to login with credentials{" "}
                                    </Alert>
                                </div>
                            )
                        } */}
                        <Form className="is-alter" onSubmit={handleSubmit} method="post">
                            <CoreInput
                                name="email"
                                label="Correo electrónico"
                                value={data.email}
                                type="text"
                                onChange={(e)=> setData('email',e.target.value)}
                                error={errors.email}
                            />
                            <CoreInput
                                name="password"
                                label="Contraseña"
                                value={data.password}
                                type="password"
                                onChange={(e)=> setData('password',e.target.value)}
                                error={errors.password}
                            />
                            <div className="form-group">
                                <Button size="lg" className="btn-block" type="submit" color="primary">
                                    {processing ? <Spinner size="sm" color="light" /> : "Sign in"}
                                </Button>
                            </div>
                        </Form>
                    </PreviewCard>
                </Block>
            </PageContainer>
        </>
    );
}
export default Login;
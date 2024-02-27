import jwt from 'jsonwebtoken';

export const generateToken = (res, userId) => {
    try {
        const token = jwt.sign(
            { userId },
            process.env.SECRET_TOKEN,
            { expiresIn: '10d' }
        );

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 10 * 24 * 60 * 60 * 1000,
        });

        return token;
    } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Internal Server Error');
    }
};

// NewsletterSignup component displays a styled email signup form
export default function NewsletterSignup() {
    return (
        <div className="container my-5 p-5 rounded-4 shadow" style={{ backgroundColor: '#fffaf5', border: '1px solid #e4dcd2' }}>
            <h2 className="text-center text-brown mb-3">join the glow club ✨</h2>
            <p className="text-center text-brown mb-4">get skincare tips, glow secrets, and exclusive offers right to your inbox.</p>

            {/* Email form */}
            <form className="row g-3 justify-content-center">
                <div className="col-md-8">
                    <input type="email" className="form-control rounded-pill" placeholder="enter your email" required />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-secondary rounded-pill px-4">subscribe</button>
                </div>
            </form>
        </div>
    );
}

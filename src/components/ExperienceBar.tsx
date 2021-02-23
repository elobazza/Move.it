export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0px</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="current-experience" style={{ left: '50%' }}>
                    300px
                </span>
            </div>
            <span>600px</span>
        </header>

    );
}
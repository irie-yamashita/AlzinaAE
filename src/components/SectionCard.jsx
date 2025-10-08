

function SectionCard({ sectionName, teams }) {
    return (
        <div>
            <div>
                <img src="" alt="pilota" />
                <h4>{sectionName}</h4>
            </div>
            <ul>
                { teams.map((team) => {
                    return  <li>{team}</li>
                })}
            </ul>
        </div>
    );
}


export default SectionCard
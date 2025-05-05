"use client"

export function Request() {
    return(
        <div>
            <select required value={""} onChange={(e) => setStatus(e.target.value)} className="input">
              <option className="bg-black" value="">Status</option>
              <option className="bg-black" value="Single">Single</option>
              <option className="bg-black" value="Commited">Commited</option>
            </select>
        </div>
    )
}
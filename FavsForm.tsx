import FormHelper from "./FormHelper"

type favsData = {
  favSong: string
  favChar: string
  favStory: string
}

type favsForm = favsData & {
  updateInputs: (inputs: Partial<favsData>) => void
}

export function FavsForm({
  favSong,
  favChar,
  favStory,
  updateInputs,
}: favsForm) {
  return (
    <FormHelper title="Christmas Favorites">
      <img src="" alt="Favorite song" width="500" height="500">
      <label>Your favorite song?</label>
      <input
        autoFocus
        required
        type="text"
        value={favSong}
        onChange={e => updateInputs({ favSong: e.target.value })}
      />
      <img src="" alt="Favorite character" width="500" height="500">
      <label>Your favorite chararacter?</label>
      <input
        required
        type="text"
        value={favChar}
        onChange={e => updateInputs({ favChar: e.target.value })}
      />
      <img src="" alt="Favorite story" width="500" height="500">
      <label>Your favorite story?</label>
      <input
        required
        type="text"
        value={favStory}
        onChange={e => updateInputs({ favStory: e.target.value })}
      />
    </FormHelper>
  )
}

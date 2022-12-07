import "./Autocomplete.css"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const PlacesAutocomplete = ({ setOriginMarker, setDestinationMarker, placeholder, isOrigin }) => {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    isOrigin ? setOriginMarker({ lat, lng }) : setDestinationMarker({ lat, lng });
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <p key={place_id} onClick={handleSelect(suggestion)} className="suggestion">
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </p>
            );
        });

    return (
        <div ref={ref}>
            <input
                type="text"
                className="input-style"
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder={placeholder}
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <div className="suggestion-wrapper">{renderSuggestions()}</div>}
        </div>
    );
};
export default PlacesAutocomplete
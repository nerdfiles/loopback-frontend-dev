/**
 * @filePath ./src/pages/admin/posts/Add.js
 * @name AddPost
 * @description Create a post using a form dressed with @material-ui.
 */
import React, {Component} from 'react';
// State handling
import {connect} from 'react-redux';
// Form handling
import {withFormik, Form} from 'formik';
import {FormikTextField, FormikSelectField} from 'formik-material-fields'
import * as Yup from 'yup';
// UI handling
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


import {withRouter} from 'react-router-dom'

// Custom imports
import * as AdminActions from '../../../actions/adminActions';
import API from '../../../api';

/* global $ */

// Custom styles
const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'row wrap',
    width: '100%',
    textAlign: 'left'

  },
  formControl: {
    margin: theme.spacing.unit

  },
  leftSide: {
    flex: 4,
    height: '100%',
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3

  },
  rightSide: {
    flex: 1,
    height: '100%',
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3

  },
  Save: {
    marginBottom: theme.spacing.unit * 3
  },
  postImage: {
    width: '100%'
  }

});

// Needful
class AddPost extends Component {

  componentDidUpdate(props, state) {

    if (
      this.props.match.params.view === 'add' && 
      this.props.admin.posts.filter(p => p.title === this.props.values.title).length > 0
    ) {
      const post = this.props.admin.posts.filter(p => 
        p.title === this.props.values.title
      )[0]
      this.props.history.push('/admin/posts/edit/' + post.id);
    }

    // Update post from redux so that old post is not loaded from state: hacky
    // but it'd be nice if it loaded before landing on the page
    if (this.props.admin.post.id !== props.admin.post.id) {
      this.props.setValues(this.props.admin.post);
    }

  }

  componentDidMount(props, state) {
    if (
      this.props.match.params.view === 'edit' && 
      this.props.match.params.id
    ) {
      // load post
      this.props.getPost(this.props.match.params.id, this.props.auth.token)
    }
  }

  uploadImage = (e) => {
    const data = new FormData();

    data.append('file', e.target.files[0], new Date().getTime().toString() + e.target.files[0].name);

    console.log(this.props.auth)
    this.props.uploadImage(data, this.props.auth.token, this.props.admin.post.id, this.props.auth.user.userId)

  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{'header': 1}, {'header': 2}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'indent': '-1'}, {'indent': '+1'}],
      [{'size': ['small', 'medium', 'large', 'huge']}],
      [{'color': []}, {'background': []}],
      ['image'],
      ['clean']
    ]

  };

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'script',
    'list', 'bullet', 'indent',
    'link', 'image', 'color', 'code-block'

  ];

  render() {

    const {classes} = this.props;

    return (
      <>
        <h1>Add Post</h1>
        <Form className={classes.container}>
          <Paper className={classes.leftSide}> 

            <FormikTextField 
              name="title"
              label="Title"
              margin="normal"
              onChange={e => this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/\s/g, '_'))}
              fullWidth
            />

            <FormikTextField 
              name="slug"
              label="Slug"
              margin="normal"
            />

            <ReactQuill 
              value={this.props.values.content}
              placeholder="Write some"
              modules={this.modules}
              formats={this.formats}
              onChange={val => this.props.setFieldValue('content', val)}
            />

          </Paper>

          <Paper className={classes.rightSide}> 
            <FormikSelectField
              name="status"
              label="Status"
              margin="normal"
              options={[
                {label: 'Unpublished', value: false},
                {label: 'Published', value: true}
              ]}
              fullWidth
            />

            <div className={classes.Save}>
              <Button
                color="secondary"
                variant="contained"
                onClick={e => {
                  this.props.handleSubmit();
                }}
              >
                <SaveIcon /> save
              </Button>

            </div>

            {
              this.props.admin.post.PostImage && this.props.admin.post.PostImage[0] ?
                <img 
                  src={API.post.makeFileUrl(this.props.admin.post.PostImage[0].url, this.props.auth.token)}
                  className={classes.postImage}
                  alt="Recently uploaded post image"
                />
                : null
            }
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={e => {

                  $('.MyFile').trigger('click');

                }}
              >
                <ImageIcon /> Upload Post Image
              </Button>

              <input 
                type="file" 
                className="MyFile" 
                style={{display: 'none'}}
                onChange={this.uploadImage}
              />

            </div>
          </Paper>
        </Form>
      </>
    );
  }
}

// State config
const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin
});

const mapDispatchToProps = dispatch => ({
  addPost: (post, token) => {
    dispatch(AdminActions.addPost(post, token));
  },

  updatePost: (post, token) => {
    dispatch(AdminActions.updatePost(post, token));
  },

  getPost: (id, token) => {
    dispatch(AdminActions.getPost(id, token))
  },

  uploadImage: (data, token, postId, userId) => {
    dispatch(AdminActions.uploadImage(data, token, postId, userId));
  }

});


// Export config
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: (props) => ({
    title: props.admin.post.title || '',
    slug: props.admin.post.slug || '',
    created_at: props.admin.post.created_at || '',
    status: props.admin.post.status || false,
    content: props.admin.post.content || ''
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Required'),
    slug: Yup.string().required(),
    content: Yup.string().required()
  }),
  handleSubmit: (values, {setSubmitting, props}) => {
    //console.log({values});

    if (props.match.params.view === 'edit') {
      const post = {
        ...values,
        id: props.match.params.id
      }
      props.updatePost(post, props.auth.token);
    } else {
      props.addPost(values, props.auth.token);
    }

  }
})(withStyles(styles)(AddPost))));
